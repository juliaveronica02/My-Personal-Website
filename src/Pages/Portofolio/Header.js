import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HTML from "../../Images/html.png";
import CSS from "../../Images/css.png";
import Bootstrap from "../../Images/bootstrap.png";
import Javascript from "../../Images/Javascript.png";
import Reactjs from "../../Images/react.png";
import Nodejs from "../../Images/nodejs.png";
import Database from "../../Images/database.png";
import Csharp from "../../Images/csharp.png";
import Photoshop from "../../Images/photoshop.png";
import Photography from "../../Images/photography.png";

export default class componentName extends Component {
  render() {
    return (
      <div id="/portofolio">
        <div className="text-center text-dark ccard mt-5 mb-5">
          <h2 className="mt-auto">My Ability</h2>
          <hr className="horizontal-line" />
        </div>
        <div className="row pl-2">
          {/* HTML CARD. */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={HTML} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">HTML</h4>
                {/* <div class="text-ellipsis"> */}
                {/* <span class="text-concat">
                    Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in.
                  </span> */}
                {/* </div> */}
              </div>
              {/* <button
                className="btn btn-primary justify-content-center"
                style={{ width: "55%" }}
              >
                ReadMore >>
              </button> */}
            </div>
          </div>
          {/* CSS CARD. */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={CSS} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">CSS</h4>
                {/* <div class="text-ellipsis">
                  <span class="text-concat">
                    Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in.
                  </span>
                </div> */}
              </div>
              {/* <button
                className="btn btn-primary justify-content-center"
                style={{ width: "55%" }}
              >
                ReadMore >>
              </button> */}
            </div>
          </div>
          {/* BOOTSTRAP CARD. */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Bootstrap} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Bootstrap</h4>
                {/* <div class="text-ellipsis">
                  <span class="text-concat">
                    Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in.
                  </span>
                </div> */}
              </div>
              {/* <button
                className="btn btn-primary justify-content-center"
                style={{ width: "55%" }}
              >
                ReadMore >>
              </button> */}
            </div>
          </div>
          {/* Javascript card. */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Javascript} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Javascript</h4>
                {/* <div class="text-ellipsis">
                  <span class="text-concat">
                    Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in.
                  </span>
                </div> */}
              </div>
              {/* <button
                className="btn btn-primary justify-content-center"
                style={{ width: "55%" }}
              >
                ReadMore >>
              </button> */}
            </div>
          </div>
          {/* Reactjs card. */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Reactjs} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Reactjs</h4>
                {/* <div class="text-ellipsis">
                  <span class="text-concat">
                    Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in.
                  </span>
                </div> */}
              </div>
              {/* <button
                className="btn btn-primary justify-content-center"
                style={{ width: "55%" }}
              >
                ReadMore >>
              </button> */}
            </div>
          </div>
          {/* Nodejs */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Nodejs} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Nodejs</h4>
                {/* <div class="text-ellipsis">
                  <span class="text-concat">
                    Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in.
                  </span> */}
              </div>
            </div>
            {/* <button
                className="btn btn-primary justify-content-center"
                style={{ width: "55%" }}
              >
                ReadMore >>
              </button> */}
          </div>
          {/* Database */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Database} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Database</h4>
                {/* <div class="text-ellipsis">
                  <span class="text-concat">
                    Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in.
                  </span>
                </div> */}
              </div>
              {/* <button
                className="btn btn-primary justify-content-center"
                style={{ width: "55%" }}
              >
                ReadMore >>
              </button> */}
            </div>
          </div>
          {/* C# */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Csharp} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">C#</h4>
                {/* <div class="text-ellipsis">
                  <span class="text-concat">
                    Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in.
                  </span>
                </div> */}
              </div>
              {/* <button
                className="btn btn-primary justify-content-center"
                style={{ width: "55%" }}
              >
                ReadMore >>
              </button> */}
            </div>
          </div>
          {/* Adobe Photoshop */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Photoshop} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Adobe Photoshop</h4>
                {/* <div class="text-ellipsis">
                  <span class="text-concat">
                    Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in.
                  </span>
                </div> */}
              </div>
              {/* <button
                className="btn btn-primary justify-content-center"
                style={{ width: "55%" }}
              >
                ReadMore >>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
