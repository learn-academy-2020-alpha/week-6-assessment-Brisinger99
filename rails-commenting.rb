# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) This is the controller inheriting from the Application rails
class BlogPostsController < ApplicationController
  def index
    # 2) This will make @post if rendered show all post made
    @posts = BlogPost.all
  end

  def show
    # 3) @post here will that in a param of id and use that to find a single BlogPost basied off its index
    @post = BlogPost.find(params[:id])
  end

  # 4) Is just here so that the veiw can show something when going to route new
  def new
  end

  def create
    # 5) uses the private function to make sure it is allowed to create a new BlogPost
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) Used if the post was unable to be deleted and will reroute user back to post
      redirect_to blog_post_path(@post)
    end
  end

  # 7) Making sure this function is not called outside of the class
  private
  def blog_post_params
    # 8) Required when creating a BlogPost with the permit allowing it to be created without the console
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) Allows the model BlogPost to inherit from the application of rails
class BlogPost < ApplicationRecord
  # 10) A single BlogPost can have many comments
  has_many :comments
end
