function Footer (){
    const year = new Date().getFullYear();
    return(
        <footer>
            <span>&copy; {year} Albert Friend</span>
        </footer>
    )
}
export default Footer