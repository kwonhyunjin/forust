import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

// @todo 포커스가 밖으로 나가는 것을 차단하는 prop 추가
function Modal({
  children, className, open = false, ...rest
}) {
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <div {...rest} className={classNames('modal', className)}>
      {children}
    </div>,
    document.body,
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool,
};

function makeFn(component) {
  return function modal(config) {
    return new Promise((resolve) => {
      const props = {
        ...config,
        open: true,
        // eslint-disable-next-line no-use-before-define
        onClose: handleClose,
      };

      const container = document.createElement('div');
      document.body.appendChild(container);

      function render(renderProps) {
        const element = React.createElement(component, renderProps);
        ReactDOM.render(element, container);
      }

      function handleClose(...args) {
        props.open = false;
        render(props);
        // @todo 애니메이션 개발할 경우 setInterval 적용
        // const id = setInterval(() => {
        // if (container.children.length > 0) { return; }
        resolve(args);
        // clearInterval(id);
        // document.body.removeChild(container);
        // }, 100);
      }

      render(props);
    });
  };
}

export default Object.assign(Modal, { makeFn });
