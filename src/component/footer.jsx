function Footer (){
    const year = new Date().getFullYear();
    return(
        <footer>
            &copy; Albert Friend {year}
        </footer>
    )
}
export default Footer