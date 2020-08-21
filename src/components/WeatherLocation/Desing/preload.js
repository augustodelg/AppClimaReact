import React from "react";
const  Preload = ()=> {

    return (
      <div class="preloader-wrapper active">
        <div class="spinner-layer spinner-black-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    );
}


export default Preload;
