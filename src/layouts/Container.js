import classess from './Container.module.css';

function Container({ children }) {
  return (
    <div className={classess.container}>
      {/* <div className={classess.content}> */}
      {children}
      {/* </div> */}

    </div>
  );
}

export default Container;
