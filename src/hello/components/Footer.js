

function FooterComponent({children, author}){
    // props : la object chua toan bo props truyen sang
    // rendering element : khong can ham render
    // render chi dc su dung trong class components
    let company = "T3h";
    return (
        <h2>This is footer - {company} - {children} - {author}</h2>
    ) 
}
export default FooterComponent;