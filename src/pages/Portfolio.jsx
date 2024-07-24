import React from "react";
import Nav from "../components/Nav";
import "../pages-css/portfolio.css"
import Gallery from "../components/gallery-component/gallery";
import Separator from "../components/Separator";
import galleryImages from "../components/gallery-component/gallery-images.json"
import Footer from "../components/Footer";
import Landing from "../components/Landing";
function Portfolio(){
    return (
        <div>
            <Nav />
            <Landing textToAppear={"PORTAFOLIO"} src={"../src/assets/portafolio.jpg"} xPosition={"center"} yPosition={"20%"}/>
            <div className="container">
                <div className="intro">
                    <h1>PORTAFOLIO</h1> <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore expedita officia et doloribus molestiae, deleniti beatae voluptatibus, eveniet sed sit. Ducimus ad commodi ab quas ratione suscipit fuga deleniti.
                    Nam quaerat quod dolores autem aliquid numquam possimus excepturi debitis culpa iste omnis, illum, cupiditate dicta. Vitae sequi dolorem amet odit dolorum veniam, ad atque non, et totam laboriosam illum.
                    Officiis ipsum eligendi, odio eaque assumenda nesciunt dolorem natus excepturi. Vitae voluptates quis modi doloribus dicta reprehenderit natus, voluptate ducimus veniam minus nihil neque, suscipit eveniet aliquam adipisci, a quas!
                    Voluptatem tempora ratione aperiam autem odit quia aspernatur maxime voluptate temporibus quidem, eos tenetur eveniet quasi, iste mollitia provident vero placeat voluptas, minus libero unde optio labore ullam aliquam. Est.
                    Molestias quas nobis animi quae modi sequi nihil veritatis, amet aperiam nam accusamus illo velit doloribus impedit numquam ipsam iusto natus dignissimos nulla mollitia eveniet exercitationem. Officia ullam eos maiores!</p>
                </div>
                <Separator />
                <Gallery imageLocs={galleryImages.galleryImages}/>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio