window.addEventListener('load', init);

function init() {
    document.querySelector('#logo').addEventListener('change', function () {
        var file = document.querySelector('#logo').files[0];

        var reader = new FileReader();

        reader.onloadend = function () {

            //  document.querySelector('#log').appendChild(preview);
            let d = document.createElement("div");
            d.classList.add("hello", "card");
            d.innerHTML =
                `   <div class="card-body">
                            <div class="row">
                                <div class="col-sm-2">
                                    <div class="card">
                                        <img src="img/user.png" style="height:80px" class="card-img-top" alt="...">
                                        <a href="profile.html">
                                            <p style="font-size:17px;text-align:center;">User 3</p>
                                        </a>
                                    </div>
                                    <center><small class="likes text-center"><i class="far fa-thumbs-up"></i>&nbsp;5
                                            Likes</small></center>
                                </div>
                                <div class="col-sm-10">
                                    <div class = "uploadImg" id = "imageUpload">
                                    </div>
                                       <div class="item-icons float-right">
                                    <a href="#" class="delete-item item-icon"><i class="far fa-times-circle fa-2x"></i></a>
                                    </div>
                                    <div class="comment-form">
                                        <form>
                                            <div class="form-row align-items-center">
                                                <div class="col-md-11">
                                                    <input type="text" class="form-control mb-2" id="commentForm"
                                                        placeholder="Enter Comment">
                                                </div>
                                                <div class="col-md-1">
                                                <a href="#" class="add-comment item-icon"><i class="fas fa-comment fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="comments">
                                        <div class="comment">
                                            <a class="comment-avatar float-left" href="#"><img src="img/user.png"></a>
                                            <div class="comment-text">
                                                <p>Dit amet consectetur adipisci velit sed quia non numquam </p>
                                            </div>
                                        </div>
                                        <div class="comment">
                                            <a class="comment-avatar float-left" href="#"><img src="img/user.png"></a>
                                            <div class="comment-text">
                                                <p>Itaque earum rerum hic tenetur a sapiente delectusr</p>
                                            </div>
                                        </div>
                                        <div class="comment">
                                            <a class="comment-avatar float-left" href="#"><img src="img/user.png"></a>
                                            <div class="comment-text">
                                                <p>Cupiditate non provident similique sunt in culpa qui</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
            dHead.appendChild(d);
            var preview = document.createElement('img');
            preview.style.height = "50px";
            document.querySelector(".uploadImg").appendChild(preview)
            preview.src = reader.result;
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        else {
            preview.src = "";
        }
    });

}