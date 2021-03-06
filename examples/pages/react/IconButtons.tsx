import * as React from 'react';

import * as Markup from '../../js/react';

import { IconButton, Prop, PropsList } from '../../../app-typescript';

export default class IconButtonDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Plain icon button</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <IconButton icon="close-small" />
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">Plain icon button are mostly used for toolbars inside other UI components. They have a built in support for custom tooltips.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default look</p>
                    <p className="docs-page__paragraph--small">Hover buttons to see tooltips.</p>
                        <div className="docs-page__content-row docs-page__content-row--white">
                            <IconButton icon='close-small' tooltip={{text:'I support tooltips!'}} onClick={()=> false} />
                            <IconButton icon='plus-large' onClick ={()=> false} />
                            <IconButton icon='dots-vertical' onClick={()=> false} />
                            <IconButton icon='trash' onClick={()=> false} />
                            <IconButton icon='close-small' tooltip={{text:'My tooltip is on right.', flow:'right'}} onClick={()=> false} />
                        </div>
                        <p className="docs-page__paragraph">// Dark UI</p>
                        <div className="docs-page__content-row docs-page__content-row--ui-dark" style={{color:'white'}}>
                            <IconButton icon='close-small' tooltip={{text:'I support tooltips!'}} onClick={()=> false} />
                            <IconButton icon='plus-large' onClick={()=> false} />
                            <IconButton icon='dots-vertical' onClick={()=> false} />
                            <IconButton icon='trash' onClick={()=> false} />
                            <IconButton icon='close-small' tooltip={{text:'My tooltip is on right.', flow:'right'}} onClick={()=> false} />
                        </div> 
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <IconButton icon='close-small' tooltip="{{text:'I support tooltips!'}}" />
                        <IconButton icon='plus-large' />
                        <IconButton icon='dots-vertical' />
                        <IconButton icon='trash' />
                        <IconButton icon='close-small' tooltip="{{text:'My tooltip is on right.', flow:'right'}}" />

                        //Dark UI
                        <IconButton icon='close-small' tooltip="{{text:'I support tooltips!'}}" />
                        <IconButton icon='plus-large' />
                        <IconButton icon='dots-vertical' />
                        <IconButton icon='trash' />
                        <IconButton icon='close-small' tooltip="{{text:'My tooltip is on right.', flow:'right'}}" />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='icon' isRequered={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='tooltip text' isRequered={true} type='string' default='/' description='Text for the tooltip.'/>
                    <Prop name='tooltip flow' isRequered={false} type='top | left | right | down' default='top' description='Position of tooltip text.'/>
                </PropsList>
            </section>
        )
    }
}
