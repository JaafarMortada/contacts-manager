const Pagination = ({totalCards, cardsPerPage, setCurrentPage, currentPage}) => {

    let pages = []

    for (let i = 1; i<= Math.ceil(totalCards/cardsPerPage) ; i++){
        pages.push(i)
    }
    return ( 
        <div className="pagination-div">
            {
                pages.map((page, index) => {
                    return <button 
                        key={index} 
                        onClick={() => setCurrentPage(page)}
                        className={(page === currentPage) ? "highlight" : ""}
                        >{page}</button>
                })
            }
        </div>
     );
}
 
export default Pagination;