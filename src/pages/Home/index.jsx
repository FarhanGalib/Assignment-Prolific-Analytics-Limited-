
import React from "react";
import { HomeWrapper } from "./styled";
export default function Home() {
    return (
        <HomeWrapper>
            <div className="info">
                <div className="img">
                    <img src="https://picsum.photos/id/1005/90/90" alt="img" />
                </div>

                <div>
                    <p className="name">Farhan Galib</p>
                    <p className="job-title">Frontend Developer</p>
                </div>
            </div>
            <div className="about">
                <p className="about-title">About Myself</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa ipsum corrupti incidunt ullam a accusantium voluptate
                    nemo eaque minus quibusdam, tempore, eum aperiam dolores id
                    voluptatem et iste, natus reprehenderit debitis alias!
                    Exercitationem molestiae temporibus laboriosam incidunt nam
                    ad voluptates inventore reprehenderit vero, cumque nostrum
                    facilis perspiciatis, dolores dolorum aperiam suscipit
                    repellendus et quas. Pariatur commodi veniam nihil
                    laboriosam consectetur qui minus velit aliquam, eligendi
                    corporis, voluptatibus modi corrupti? Ducimus, optio
                    officiis, ut rerum tempora nostrum sapiente ex nulla, fuga
                    eos non aperiam maiores molestias cumque et illo laborum
                    alias itaque pariatur dicta. Vel, at dolore. Quae nam alias
                    soluta!
                </p>
            </div>
        </HomeWrapper>
    );
}
