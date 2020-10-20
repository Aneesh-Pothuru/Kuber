import React from 'react';
import './about.scss';
import Button from "@material-ui/core/Button";

const about = () => (
    <div>
        <div class="about-section">
            <h1>Contact Us</h1>
            <p>We are undegraduate students at San Jose State University studying Software Engineering</p>
        </div>

        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div class="row">
            <div class="column">
                <div class="card">
                    <img class="image" src="https://media-exp1.licdn.com/dms/image/C5603AQGmWsfNK70_fg/profile-displayphoto-shrink_400_400/0?e=1608768000&v=beta&t=zA7GI_RQslH5yVEt0W9NSWMMeMcLqt4i7dAQC-qCrpo" alt="" style={{ "width": "50%" }} />
                    <div class="container">
                        <h2>Aneesh Pothuru</h2>
                        <p class="title">Software Engineer</p>
                        <p>Contact</p>
                        <p>aneesh.pothuru@sjsu.edu</p>
                        <p><Button class="button" href="https://www.linkedin.com/in/aneesh-pothuru/">LinkedIn</Button></p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img class="image" src="https://media-exp1.licdn.com/dms/image/C5603AQGpq3PhLfA15Q/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=JJYrKbb-wcHXzzx6ufJ5hWRGYaeVSZn-zRwoDtR73-4" alt="" style={{ "width": "50%" }} />
                    <div class="container">
                        <h2>Edgar Villanueva</h2>
                        <p class="title">Software Engineer</p>
                        <p>Contact</p>
                        <p>edgar.villanueva@sjsu.edu</p>
                        <p><Button class="button" href="https://www.linkedin.com/in/edgar-villanueva-0859501aa/">LinkedIn</Button></p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img class="image" src="https://media-exp1.licdn.com/dms/image/C5603AQFkHPTrRbF3rg/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=gc-GN6EAH55KKtYBuPni6OItoexq0hzsfAog8HNFIwY" alt="" style={{ "width": "50%" }} />
                    <div class="container">
                        <h2>Matthew Wong</h2>
                        <p class="title">Software Engineer</p>
                        <p>Contact</p>
                        <p>matthew.c.wong@sjsu.edu</p>
                        <p><Button class="button" href="https://www.linkedin.com/in/matthew-wong-48a491163/">LinkedIn</Button></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default about;