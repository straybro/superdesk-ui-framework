import * as React from 'react';

interface IProps {
    checked: boolean;
    label: {
        text: string,
    };
    icon?: string;
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}

export class CheckboxButton extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        if (this.props.disabled) {
            return;
        }
        this.props.onChange(!this.props.checked);
    }

    render() {
        return (
            <span className={'sd-check-button' +
                (this.props.disabled ? ' sd-check-new--disabled' :
                    (this.props.checked ? ' checked' : ''))}
                onClick={this.handleChange}>
                {this.props.icon ? <i className={`icon-${this.props.icon}`}></i> : null}
                {this.props.disabled ?
                    (<label className='sd-check-button__text-label sd-label--disabled'>{this.props.label.text}
                    </label>) : (<label className='sd-check-button__text-label'>{this.props.label.text}</label>)}
            </span>
        );
    }
}
