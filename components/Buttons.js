export const PrimaryButton =(props)=>{
    return(
        <button type="button" onClick={props.onClick} className="btn btn-outline-primary">{props.text}</button>
    )
}

export const MobilePrimaryButton=(props)=>{
    return(
        <button type="button" onClick={props.onClick} className="btn btn-outline-primary mobie-btn">{props.text}</button>
    )
}

export const SubmitButton =(props)=>{
    return(
        <button type="submit" className="btn btn-outline-primary">{props.text}</button>
    )
}

export const MobileSubmitButton =(props)=>{
    return(
        <button type="submit" className="btn btn-outline-primary mobile-btn-block">{props.text}</button>
    )
}

export const PrimarySolidButton =(props)=>{
    return(
        <button type="button" className="btn btn-primary">{props.text}</button>
    )
}

export const MobilePrimarySolidButton =(props)=>{
    return(
        <button type="button" className="mobile-btn btn btn-primary ">{props.text}</button>
    )
}

export const FormButton=(props)=>{
    return(
        <button type="submit" className="btn btn-primary">{props.text}</button>
    )
}