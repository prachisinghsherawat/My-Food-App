function navbar() {

    return ` <div class="nav">
    <h2>PICK YOUR FOOD</h2>

    <div class="navbox">
    <input type="text" id="search" placeholder="Search">
    <div class="btn"><i class="far fa-search"></i></div>
    </div>

    <div class="right">
        <div><a href="random.html">Random</a></div>
        <div><a href="recipy.html">Recipe</a></div>
        <div><a href="signin.html">Sign Up</a></div>
        <div><a href="login.html">Login</a></div>
    </div>`

}

export default navbar;