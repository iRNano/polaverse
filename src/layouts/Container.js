import classess from './Container.module.css'
const Container = (props) => {
    return(
        <div className={classess.container}>
            {/* <div className={classess.content}> */}
                {props.children}
            {/* </div> */}
            
        </div>
    )
}

export default Container;