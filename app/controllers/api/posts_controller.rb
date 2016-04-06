class Api::PostsController < ApplicationController
  before_filter :ensure_logged_in

  def index
    @posts = Post
      .where( profile_id: params['profileId'] )
      .includes( author: :profile )
      .includes( receiver: :profile )
      .includes( :likes )
      .order( created_at: :desc )
    render :index
  end

  def create
    @post = Post.new( post_params )
    @post.author_id = current_user.id

    if @post.save
      render :show
    else
      render text: 'something went wrong', status: 422
    end
  end

  def feed
    valid_friend_ids = current_user.friends.map(&:id)
    valid_ids = Profile.where( 'profiles.user_id in (?)', valid_friend_ids ).map(&:id)
    valid_ids.push current_user.profile.id

    @posts = Post.where( ' posts.profile_id IN (?) ', valid_ids )
      .includes( author: :profile )
      .includes( receiver: :profile )
      .includes( :likes )
      .includes( :likers )
      .order( created_at: :desc )

    render :index
  end

  def destroy
    @post = Post.find( params[:id] )
    if @post.author_id == current_user.id
      @post.destroy
      render :show
    else
      render text: 'unauthorized', status: 401
    end
  end

  private

  def post_params
    params.require( :post ).permit :body, :profile_id, :photo
  end

  def ensure_logged_in
    unless logged_in?
      render text: 'unauthorized', status: 401
    end
  end
end
