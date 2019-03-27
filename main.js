var count = 0;
var likes = 0;
var itemForm = document.getElementById("item-form")
var itemInput = document.getElementById("itemInput")
var dHead = document.getElementById("item-head")
var itemData = JSON.parse(localStorage.getItem("list")) || [];
//console.log(itemData);

if (itemData.length > 0) {
    itemData.forEach(function (singleItem) {
        dHead.insertAdjacentHTML("beforeend", `
                    <div class = "hello card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-2">
                                    <div class="card">
                                        <img src="img/user.png" style="height:80px" class="card-img-top" alt="...">
                                        <a href="profile.html">
                                            <p style="font-size:17px;text-align:center;">User</p>
                                        </a>
                                    </div>
                                    <center><small class="likes text-center"><i class="far fa-thumbs-up"></i>&nbsp;0
                                            Likes</small></center>
                                </div>
                                <div class="col-sm-10">
                                    <div class="bubble">
                                        <div class="pointer">
                                            <p class = "item-name">${singleItem.dataInfo}</p>
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

        handleItem(singleItem.dataInfo)
    })
}


//FORM SUBMISSION
itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var textValue = itemInput.value;

    //  console.log(textValue);
     
    if(textValue !== "")
    //addItem
   { addItem(textValue) 

    //CLEAR the form
    itemInput.value = "";
    //add item to array
    itemData.push({dataInfo:textValue,likeCount:likes})
    // console.log(itemData)

    //LOCALSTORAGE
    localStorage.setItem("list", JSON.stringify(itemData))

    //ADD EVENT LISTENERS TO CHILDREN
    handleItem(textValue)

    }
})



//ADD ITEM
function addItem(value,count=0) {
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
                                    <center><small class="likes text-center"><i class="far fa-thumbs-up"></i>&nbsp;${count}
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
                
                if(itemInput.value === '')
               { itemInput.value = textValue;
                dHead.removeChild(item)
                //  console.log(itemData)
                itemData = itemData.filter(function (item) {
                    return item.dataInfo !== textValue
                })
                // console.log(itemData)
                localStorage.setItem("list", JSON.stringify(itemData)) }

            })

            item.querySelector(".delete-item").addEventListener("click", function (event) {  //DELETE EVENT LISTENER
                
                event.preventDefault();
                dHead.removeChild(item)
                itemData = itemData.filter(function (item) {
                    return item.dataInfo !== textValue
                })
                localStorage.setItem("list", JSON.stringify(itemData))

            })

            item.querySelector(".like-item").addEventListener("click", function (event) {
               
                event.preventDefault();

                count++;
               
                item.querySelector(".likes").innerHTML = `<i class="far fa-thumbs-up"></i>&nbsp;${count}
                Likes`

               
            })

            item.querySelector(".add-comment").addEventListener("click", function (event) {
               
                event.preventDefault();

                var value = item.querySelector("#commentForm").value;
                
                if(value !== '')
                {
                var comment = document.createElement("div");
                comment.classList.add("comment");
                comment.innerHTML = `<a class="comment-avatar float-left" href="#"><img src="img/user.png"></a>
                <div class="comment-text">
                    <p>${value}</p>
                </div>`
                
                 item.querySelector("#commentForm").value = '';

                 item.querySelector(".comments").appendChild(comment)
                }
            })
        }
    })
}
