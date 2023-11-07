import ReactQuill from "react-quill";

export default function Editor({value, onChange}){
    const modules = {toolbar:[
        [{'header':[1,2,false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'List':'ordered'},{'list':'bullet'},],
        ['link', 'image'],
        ['clean']
    ]};
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    return (
        <ReactQuill 
            value={value} 
            theme={'snow'}
            onChange={onChange}
            modules={modules}/>
    )
}