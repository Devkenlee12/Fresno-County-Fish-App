import React from "react";


function Inputfield () {

    return (
        <div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Fisher Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Fisher Name..." />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Location</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Locations..."  />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Type of Fish</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Type of Fish..." />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Weight</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Weight..." />
            </div>
        </div>
    )
}


export default Inputfield;