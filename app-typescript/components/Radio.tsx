import * as React from 'react';
import classNames from 'classnames';

interface IProps<T> {
    value: T;
    options: Array<{
        label: string,
        value: T,
        disabled?: boolean,
    }>;
    labelSide?: 'left' | 'right'; // defaults to 'right'
    onChange: (value: T) => void;
}

export class Radio<T> extends React.PureComponent<IProps<T>> {
    constructor(props: IProps<T>) {
        super(props);
        this.handleLabel = this.handleLabel.bind(this);
    }

    handleChange(item: any) {
        if (!item.disabled) {
            this.props.onChange(item.value);
        }
    }

    handleLabel(item: any) {
        const classes = classNames({
            'sd-label--disabled': item.disabled,
            'label--active': this.props.value === item.value,
        });

        return <label className={classes} onClick={() => this.handleChange(item)}>{item.label}</label>;
    }

    render() {
        return (
            this.props.options.map((item: any, index: number) => (
                <span className='sd-check-new__wrapper' key={index} label-position={this.props.labelSide === 'left' ? 'left' : null}>
                    {this.props.labelSide === 'left' ? this.handleLabel(item) : null}
                    <span className={'sd-radio-new' +
                        (item.disabled ? ' sd-checkbox--disabled' :
                            (this.props.value === item.value ? ' checked' : ''))}
                        onClick={() => this.handleChange(item)}></span>
                    {!this.props.labelSide ? this.handleLabel(item) : null}
                </span>
            ))
        );
    }
}
