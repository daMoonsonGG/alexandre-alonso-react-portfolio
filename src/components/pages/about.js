import React from "react";
import ProfilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + ProfilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
        magna in libero luctus sollicitudin. In et molestie justo. Sed sed
        fringilla lorem. Vestibulum eget neque eu leo cursus aliquam. Etiam
        vitae neque varius, tincidunt libero eget, condimentum quam. Mauris
        sollicitudin iaculis pretium. Phasellus commodo, quam id mattis
        consectetur, nulla magna lobortis eros, nec sagittis eros orci non nibh.
        Maecenas varius tortor ac lectus blandit iaculis aliquet at tellus.
        Praesent convallis bibendum pulvinar. Duis tincidunt lacus mauris, sed
        ullamcorper massa ullamcorper eget. Donec fringilla turpis vel neque
        feugiat, quis commodo sem fermentum. Etiam sed sapien nibh. Integer est
        libero, convallis ac enim a, mattis posuere est. Praesent a elit vel
        libero accumsan interdum. Nunc porttitor lacus a luctus malesuada.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit
        amet volutpat ipsum. Ut fermentum sit amet metus sit amet euismod.
        Vivamus condimentum rutrum tincidunt. Fusce a lectus diam. Duis pharetra
        libero urna, ut feugiat mi finibus a. Vestibulum mollis leo quis ligula
        vestibulum, tincidunt rhoncus tellus vehicula. Vestibulum enim risus,
        iaculis id semper vitae, consequat sit amet libero. Sed ac volutpat
        metus. Nulla accumsan neque a placerat congue.
      </div>
    </div>
  );
}
