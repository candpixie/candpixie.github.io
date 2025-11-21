# How to Add Your Profile Picture

Your website is now ready to display your profile picture! Follow these steps:

## Option 1: Using a File (Recommended)

1. Save your cropped profile picture as `profile.png` 
2. Place it in the `/public` folder of your project
3. Open `index.html` and find line 744 (the img tag)
4. Replace the src attribute with: `src="/profile.png"`

## Option 2: Using Base64 (Current Setup)

1. Open the `update-profile.html` file in your browser
2. Click "Choose File" and select your profile picture
3. Copy the base64 code that appears
4. Open `index.html` and find the `<img>` tag around line 744
5. Replace everything after `src="` and before the closing `"`

## Option 3: Using an External URL

1. Upload your image to an image hosting service (imgur, cloudinary, etc.)
2. Copy the direct image URL
3. Open `index.html` and find line 744
4. Replace the src with your image URL

The image will automatically be displayed in a circular frame with a pink border, and it will have the same floating animation as before!
