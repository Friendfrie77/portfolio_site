function Footer (){
    const year = new Date().getFullYear();
    return(
        <footer>
            <span>&copy; Albert Friend {year}</span>
        </footer>
    )
}
export default Footer