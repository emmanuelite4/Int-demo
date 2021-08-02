

export default function Form(props){

    const onSubmit = (event)=>{
        event.preventDefault();
        props.onSubmit()
    }
    return (
        <form {...props} onSubmit={onSubmit}>{props.children}</form>
    )
}