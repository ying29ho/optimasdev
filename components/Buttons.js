export const PrimaryButton =(props)=>{
    return(
        <button type="button" onClick={props.onClick} className="btn btn-outline-primary">{props.text}</button>
    )
}

export const SubmitButton =(props)=>{
    return(
        <button type="submit" className="btn btn-outline-primary">{props.text}</button>
    )
}

export const MobileSubmitButton =(props)=>{
    return(
        <button type="submit" className="btn btn-outline-primary btn-lg btn-block">{props.text}</button>
    )
}

export const PrimarySolidButton =(props)=>{
    return(
        <button type="button" className="btn btn-primary">{props.text}</button>
    )
}

export const FormButton=(props)=>{
    return(
        <button type="submit" className="btn btn-primary">{props.text}</button>
    )
}