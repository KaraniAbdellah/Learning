// Start Learning


// One To Many 
/*
    In a One-to-Many relationship:
        One User can create many Posts.
        Each Post belongs to one User.

    How it works in your schema:
        The User model has no reference to Post.
        The Post model has a postOwner field (mongoose.Types.ObjectId), linking each post to a single user.
        A user can have multiple posts, but each post belongs to only one user.
*/

