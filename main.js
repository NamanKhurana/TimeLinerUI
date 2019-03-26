/*function addComment(event) {
    event.preventDefault();
    let a = document.getElementById("inlineFormInput").value;
    let commentHead = document.getElementById("commentHead");
    let d = document.createElement("div");
    d.classList.add("comment");

    d.innerHTML = `<a class="comment-avatar float-left" href="#"><img src="img/user.png"></a>
    <div class="comment-text">
        <p>${a}</p>
    </div>`

    commentHead.appendChild(d);
}*/

var count = 0;
const itemForm = document.getElementById("item-form")
const itemInput = document.getElementById("itemInput")
let dHead = document.getElementById("item-head")
let itemData = JSON.parse(localStorage.getItem("list")) || [];
//console.log(itemData);

if (itemData.length > 0) {
    itemData.forEach(function (singleItem) {
        dHead.insertAdjacentHTML("beforeend", `
                    <div class = "hello card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-2">
                                    <div class="card" style="max-height:110px">
                                        <img src="img/user.png" style="height:80px" class="card-img-top" alt="...">
                                        <a href="profile.html">
                                            <p style="font-size:17px;text-align:center;">User</p>
                                        </a>
                                    </div>
                                    <center><small class="likes text-center"><i class="far fa-thumbs-up"></i>&nbsp;5
                                            Likes</small></center>
                                </div>
                                <div class="col-sm-10">
                                    <div class="bubble">
                                        <div class="pointer">
                                            <p class = "item-name">${singleItem}</p>
                                        </div>
                                        <div class="pointer-border">
                                        </div>
                                    </div>
                                    <div class="item-icons float-right">
                                    <a href="#" class="like-item mx-2 item-icon"><i class="fas fa-thumbs-up fa-2x"></i></a>
                                    <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit fa-2x"></i></a>
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
                        </div>
                    </div>
        `)

        handleItem(singleItem)
    })
}

/*
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
                                    <div class="card" style="max-height:110px">
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
*/

//FORM SUBMISSION
itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const textValue = itemInput.value;
    var likes = count
    //  console.log(textValue);

    //addItem
    addItem(textValue, likes)

    //CLEAR the form
    itemInput.value = "";
    //add item to array
    itemData.push(textValue)
    // console.log(itemData)

    //LOCALSTORAGE
    localStorage.setItem("list", JSON.stringify(itemData))

    //ADD EVENT LISTENERS TO CHILDREN
    handleItem(textValue)

})



//ADD ITEM
function addItem(value, likes) {
    let d = document.createElement("div");
    d.classList.add("hello", "card");
    d.innerHTML =
        `   <div class="card-body">
                            <div class="row">
                                <div class="col-sm-2">
                                    <div class="card" style="max-height:110px">
                                        <img src="img/user.png" style="height:80px" class="card-img-top" alt="...">
                                        <a href="profile.html">
                                            <p style="font-size:17px;text-align:center;">User</p>
                                        </a>
                                    </div>
                                    <center><small class="likes text-center"><i class="far fa-thumbs-up"></i>&nbsp;${likes}
                                            Likes</small></center>
                                </div>
                                <div class="col-sm-10">
                                    <div class="bubble">
                                        <div class="pointer">
                                            <p class = "item-name">${value}</p>
                                        </div>
                                        <div class="pointer-border">
                                        </div>
                                    </div>
                                    <div class="item-icons float-right">
                                    <a href="#" class="like-item mx-2 item-icon"><i class="fas fa-thumbs-up fa-2x"></i></a>
                                    <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit fa-2x"></i></a>
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
}




//HANDLE ICONS
function handleItem(textValue, count = 0) {
    const items = dHead.querySelectorAll(".hello");
    items.forEach(function (item) {
        if (item.querySelector(".item-name").textContent === textValue) {  //EDIT EVENT LISTENER
            item.querySelector(".edit-item").addEventListener("click", function () {
                itemInput.value = textValue;
                dHead.removeChild(item)
                //  console.log(itemData)
                itemData = itemData.filter(function (item) {
                    return item !== textValue
                })
                // console.log(itemData)
                localStorage.setItem("list", JSON.stringify(itemData))

            })

            item.querySelector(".delete-item").addEventListener("click", function () {  //DELETE EVENT LISTENER
                dHead.removeChild(item)
                itemData = itemData.filter(function (item) {
                    return item !== textValue
                })
                localStorage.setItem("list", JSON.stringify(itemData))

            })

            item.querySelector(".like-item").addEventListener("click", function () {
                document.querySelector(".likes").innerHTML = `<i class="far fa-thumbs-up"></i>&nbsp;${count}
                Likes`

                count++;
            })
        }
    })
}
