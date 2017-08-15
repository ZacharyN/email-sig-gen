#Angular HTML Email Signature Generator

This is a simple web app built with Angular 1 and Bootstrap 3 to create HTML signatures. I've got a post on my LinkedIn profile detailing how this project came to be. If you're curious, check it out (eventually) here.

You can see a demo version of the email signature generator, using my personal branding styles, [here](http://zacharynelson.me/demo-apps/esg/).

### Features
* Angular 1
* Bootstrap 3
* Spinning CSS3 Preloader
* Fallbacks to prevent social media links from breaking
* Inline CSS vendor prefixing to improve the consistency of the signature's rendering across a number of email clients
* One-click to select all of the text and images of the HTML signature
* Easy to follow instructions for adding the HTML signature to Outlook

## Make it your own

Obnoxiously for you, I don't have any build tools here to make it quicker to get up and running. I used [Zurb's Email Inliner](http://foundation.zurb.com/emails/inliner.html) for the HTML in the email signature. I built this in PhpStorm and used its File Watchers to handle processing the SCSS. So if you want to use this, you'll probably need to build your own Gulp or Grunt file. I might add one in a future update.

Additionally, this project was piecemealed together. You'll find a handful of inefficiencies here. For example, `_colors.scss` does not carry over to the `_nav.scss`; so if you want to change the colors of the navbar to match the colors in the app, you'll need to update both. I may fix this eventually, but this project was built rapidly and under the mantra "finished beats perfect." If you want to make this your own, read the section below and I'll point out where you need to change things to get this working for your purposes.
  
### Styles

In the `SCSS folder`, you've got the `main.scss` which imports the partials and has some SCSS used throughout the app.

To quickly change the colors of the app, go into the `_colors.scss` and change the variables to whatever your heart desires. It's important to note, these styles only apply to the app; not the HTML email signature. To change the colors in the HTML email signature you'll need to do that inline. Yes, it's a pain. Unless this takes off, I really don't plan on changing that.

`_nav.scss` contains the styles for the TWBS navbar. I used [TWBSColor](http://work.smarchal.com/twbscolor/) to generate the navbar for this web app. The demo version doesn't have any nav links; so you'd need to add those in to make this your own.

Finally, `_loader.scss` contains the styles for the web app's preloader. I used a tutorial fromm [@ihatetomatoes](https://ihatetomatoes.net/create-css3-spinning-preloader/) to make this preloader. More information on the tutorial is in the `_loader.scss` file.

That's all for the styles; now onto the app!

### Customizing the Live Preview

To make the HTML Email Signature Generator your own, you need to customize both the live preview and the HTML signature that pops up when the user clicks on "Get My Signature."

#### Images
The live preview starts on line 313. First you'll want to customize the logo on line 323. The logo is 90x90 in the demo app. If you change the size, don't forget to change both the `width` attribute and the width in the `style` attribute. I'm hosting all of the images for the demo app on my server; but if that's not an option for you, an AWS S3 bucket would work, too.

#### Preview Text
The live preview comes with preview text loaded, so the user can get a feel for what the final signature should look like. For example, on line 327 is the preview text `Zachary Nelson`. When th user types in their own name, the fallback text is relaced with the user's input.

To customize the preview text, you want to replace the fallback text. Keeping with the example above, you would change the `Zachary Nelson` in the following data-binding: `{{yourName ||'Zachary Nelson'}}`.

### Customizing the HTML Email Signature
The HTML users will copy and paste into their email client begins on line 401. Just as with the live preview, you'll need to change the logo. Here it is on line 405. Again, if you change the width, remember to update the attribute tags.

In this section of the web app, fallback text is used to keep links from breaking as opposed to offering placeholder text. For example, should a Franchisee not add their LinkedIn profile, the signature generator provides a fallback to the Corporate LinkedIn page.

### Final Thoughts
#### Social Media Icons
The social media icons in this demo app are from [Alfredo Hernandez](https://www.iconfinder.com/iconsets/black-white-social-media) and are licensed under a Creative Commons (Attribution 3.0 Unported) licence.

####Form Validation & Character Limits
In the production version, I'm using formvalidation.io's jQuery form validator. Since that's a paid jQuery plugin, I've dropped that functionality out of the demo app.

I've also removed the character limits from the demo app. Feel free to add those back in.

####Custom Tracking Links
The `Your Location ID` on line 86 was used to create a trackable URL for the website link (line 421). That functionality was removed for the demo app.

###Finding Me
Comments, questions, concerns, complaints? Find me on [LinkedIn](https://www.linkedin.com/in/zacharynelson) or shoot me a message on Twitter [@ZacharyNelson](https://twitter.com/ZacharyNelson).
