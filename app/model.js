var MODEL = (function() {

    var _homeContent = `<div class="hero"></div>
    <div class="home-main"> <!-- Begin Homepage Content -->
        <div class="welcome">
            <h1>Welcome! This website is the future home of my band, Kill the Cook!</h1>
            <p>It is currently a work in progress - All content is temporary filler content until we actually have something to show. Check back in the future, if you dare!</p>
            <div class="video-container">
                <h2>View our Latest Music Video</h2>
                <video src="video/music-video-placeholder.mp4" type="video/mp4">This is where I would put a music video - if I had one.</video>
            </div>
        </div>
        <div class="links-section">
            <h2>More Stuff</h2>
        <div class="img-links-container">
            
            <div class="img-link-item">
                <h2>Shop Music & Merch</h2>
                <a href="#"><img src="images/merch_img.jpg" alt=""></a>
            </div>
            <div class="img-link-item">
                <h2>Contact Us!</h2>
                <a href="#"><img src="images/help_us.jpg" alt=""></a>
            </div>
            <div class="img-link-wide">
                <h2>About the Band</h2>
                <a href="#"><img src="images/about-wide.jpeg" alt="About Us"></a>
            </div>
        </div>
        </div>
        
        <div class="tour-calendar-container">
            <h1>Tour Calendar</h1>
            <div class="tour-calendar">
                <div class="tour-column"> 
                    <a href="#">4/23/2050 - Olympus Mons State Park Amphitheatre, Mars Colony</a><br>
                    <a href="#">4/24/2050 - Pierre's Lounge, Fort Wayne, IN </a><br>
                    <a href="#">4/25/2050 - The Double Door, Chicago, IL</a><br>
                    <a href="#">4/26/2050 - Some Guy's House, Detroit, MI</a><br>
                    <a href="#">4/27/2050 - A Literal Gutter, Cleveland, OH</a><br>
                    <a href="#">4/28/2050 - Black Mountain Brewery, Asheville, NC</a><br>
                </div>
                <div class="tour-column">
                    <a href="#">4/30/2050 - The Doghouse, Philadelphia, PA</a><br>
                    <a href="#">5/1/2050 - Hall of the Rat King, New York, NY</a><br>
                    <a href="#">5/3/2050 - Slippy's Bar and Grill, Atlanta, GA</a><br>
                    <a href="#">5/4/2050 - Bubba Gump's Shrimp Boat, Pensacola, FL</a><br>
                    <a href="#">5/5/2050 - SGC Headquarters, Cheyenne Mountain, CO</a>
                </div>
            </div>
        </div>

        
    </div><!-- End Homepage Content -->`;
    var _aboutContent = `<div class="hero"></div>
    <div class="about-main"> <!-- Begin Main About Page Content -->
        <div class="about-band"><h1>About the Band</h1>
            <img src="images/band_bio.jpg" alt="The band">
            <p>Kill the Cook is the greatest worst band no-one's ever heard of. Founded in 2020 by a couple of losers from Greenfield, IN, <br> 
            the band combines a schizophrenic mix of musical styles to create something uniquely terrible. In a way, Kill the Cook is groundbreaking <br>
            in that their approach to making music pays no attention to tone, rhythm, harmony, or even a basic sense of musicianship.  This lack of concern for 
            quality<br> has allowed them to shamelessly assault the ears of the few unfortunate souls to fall within listening distance, and the world is a worse place for it.
            <br><br>Listeners beware, as this duo of absolute hacks has threatened to release an entire studio album and begin touring at some point. May God have mercy on us all!
            </p>
        </div>
        <h1>Member Bios</h1>
        <div class="member-bios">
            <div class="member-bio-item">
                <div class="member-bio-img">
                    <img src="images/dan_bio.jpg" alt="Dan Todd">
                </div>
                <h2>Dan Todd</h2>
                <h3>Bass/Guitar/Vocals/Kazoo</h3>

                <p>I don't even know where to begin with this guy. Rumour has it he was not born, but spawned into being by crawling from the depths of a particularly foul bog - 
                    An avatar of filth and decay. After stealing a bass guitar from a much more talented street musician, this dreadful creature decided that "learning to play an instrument" 
                    was inconvenient and hard, and resolved to start a band anyway. We can only hope that this unholy beast returns to the muck from whence it came before it can do any more damage.
                </p>
            </div>
            <div class="member-bio-item">
                <div class="member-bio-img">
                    <img src="images/myles_bio.jpg" alt="Myles Murphy">
                </div>
                <h2>Myles Murphy</h2>
                <h3>Drums/Guitar/Vocals/Tri-County Yelling Champion 2002</h3>
                
                <p>What do you get when you mix a baboon, a pig, dangerous amounts of radiation, and force it to listen to amplifier feedback 24/7 for a lifetime? You get this guy! He is believed 
                    to be quite talented on the drums, but what is heard to most as sick beats is actually a cry for help from the abomination within. He would use his words to cry for help, 
                    but he can only vocalize unintelligible yelling - A "talent" which led to his first and only commendation as Yelling Champion of the tri-county area.
                </p>
            </div>
        </div>

        <div class="faq-container">
            <h1>F.A.Q.</h1>
            <div class="faq-item">
                <h3>Q: Are you guys even a real band?</h3>
                <h3>A: Yes! If you call two dudes making noise in a garage a band, we're the real deal! Deal with it! </h3>
            </div>
            <div class="faq-item">
                <h3>Q: If you're a real band, why don't you have any music recorded?</h3>
                <h3>A: Because songwriting is hard, and recording is expensive! Get off my case, dude!</h3>
            </div>
            <div class="faq-item">
                <h3>Q: Why "Kill the Cook"? What did the cook do to deserve this?</h3>
                <h3>A: We started the band in a desperate bid to get out of the endless grind that is the culinary industry. "Kill the Cook" is a metaphor, or something.</h3>
            </div>
            <div class="faq-item">
                <h3>Q: Why are you guys so bad at this?</h3>
                <h3>A: Why do you ask so many questions, imaginary person?</h3>
            </div>

        </div>
    </div><!-- End Main About Page Content -->`;
    var _productsContent = `<div class="hero"></div>
    <div class="shop-main">
        <div class="shop-banner">
            <h1>KTC Store</h1>
        </div>
        <h2>New Releases</h2>
        <div class="shop-section">
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
        </div>
        <h2>All Albums</h2>
        <div class="shop-section">
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
        </div>
        <h2>Apparel</h2>
        <div class="shop-section">
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            <div class="shop-item">
                <img src="images/merch_img.jpg" alt="merch item">
                <div class="shop-item-text">
                    <h3>Item Name & Price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in quis numquam minima sunt, hic dolores est dolorem.</p>
                    <div class="shop-item-buttons">
                        <button class="addtocart">Add to Cart</button>
                        <button class="details">Item Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>`;
    var _contactContent = `<div class="hero"></div>
    <div class="contact-main">
        <h1>Contact Us</h1>
        <div class="contact-form">
            <h2>Contact Form</h2>           
            <div class="input-short">
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
            </div>
            <div class="input-long">
                <input type="text" placeholder="Email">
            </div>
            <div class="input-long">
                <input type="text" placeholder="Phone">
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Tell us what's up, bro"></textarea>
            <button type="submit"><h3>SUBMIT</h3></button>
        </div>
        <div class="contact-links">
            <h2>Follow Us!</h2>
            <div class="links-flex">
                <a href="#">
                    <h3>BandCamp</h3>
                </a>
                <a href="#">
                    <h3>Spotify</h3>
                </a>
                <a href="#">
                    <h3>SoundCloud</h3>
                </a>
                <a href="#">
                    <h3>BandLab</h3>
                </a>
                <a href="#">
                    <h3>Instagram</h3>
                </a>
            </div>
            <p>
                For official business, hate mail, or anything else - Feel free to reach out via the contact form on this page, or on any of the media sites listed above.
            </p>
            <p>
                Kill the Cook is not responsible for broken hearts, shattered expectations, or hearing loss resulting from contact with Kill the Cook. Kill the Cook has been deemed unsafe for human consumption by the FDA, proceed at your own risk.
            </p>
            <h3>!,,! ROCK & ROLL !,,!</h3>        
        </div>
    </div>`;

    var _updateView = function(pageName){
        console.log("Model" + pageName);
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));
    };

    return {
        updateView: _updateView,
    }

}) ();