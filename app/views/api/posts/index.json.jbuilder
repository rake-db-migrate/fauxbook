json.array! @posts do |post|
  json.photo post.photo( :medium )
  json.id post.id
  json.body post.body
  json.author_name "#{post.author.profile.first_name} #{post.author.profile.last_name}"
  json.author_id post.author_id
  json.author_picture post.author.profile.profile_picture
  json.date post.created_at.strftime("%B %d, %Y")
  json.receiver_name "#{post.receiver.profile.first_name} #{post.receiver.profile.last_name}"
  json.receiver_id post.receiver.id
  json.receiver_picture post.receiver.profile.profile_picture
end
