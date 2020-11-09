import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    Mariam
                </div>
                <div className={classes.dialog}>
                    Dmitry
                </div>
                <div className={classes.dialog}>
                    Maxim
                </div>
                <div className={classes.dialog}>
                    Igor
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;