json.extract! @profile, :id, :user_id, :first_name, :last_name, :gender, :location
json.birthday @profile.birthday.strftime("%B %d, %Y")
json.profile_picture @profile.profile_picture.url
json.cover_photo @profile.cover_photo
json.user do
  json.id @profile.user_id
  json.is_friend current_user.friends.include? @profile.user
  json.is_pending current_user.pending_friend_requests.include? @profile.user
  json.is_user current_user.id == @profile.user_id
  json.is_requested current_user.friend_requests.include? @profile.user
end
