import React, {ChangeEvent, KeyboardEvent, useRef} from 'react';
import c from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    status: string
    updateStatusTC: (status:string)=> void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode=()=> {
        this.setState({editMode: true})
    }
    deactivateEditMode=()=> {
        this.setState({editMode: false})
        this.props.updateStatusTC(this.state.status)
    }
    deactivateEditModeOnEnter=(e: KeyboardEvent<HTMLInputElement>)=> {
        if (e.key === 'Enter' || e.key === 'Escape') {
            this.setState({editMode: false})
            this.props.updateStatusTC(this.state.status) // синхронизация стейта
        }
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status!==this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    onChangeStatusInput=(event: ChangeEvent<HTMLInputElement>)=> {
        this.setState({status: event.currentTarget.value})
    }

    render() {

        return (
            <div>
                {this.state.editMode ?
                    <div className={c.statusWrapper}
                         onDoubleClick={this.activateEditMode}
                    >
                        <input
                            value={this.state.status}
                            onKeyPress={(e) => this.deactivateEditModeOnEnter(e)}
                            onChange={(e)=>this.onChangeStatusInput(e)}
                            onBlur={this.deactivateEditMode}
                            autoFocus={true}
                        />
                    </div>
                    : <div className={c.statusWrapper}
                           onDoubleClick={this.activateEditMode}
                    >
                    <span>
                        {this.props.status || 'put your status here'}
            </span>
                    </div>
                }
            </div>
        );
    }
}

