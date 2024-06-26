import { useCallback } from 'react';
import { connect } from 'react-redux'
import { draftChange } from 'data/actions/bookmarks'

import { Form } from 'co/form'
import { TitleCover, TitleExcerpt } from './index.style'
import Title from './title'
import Excerpt from './excerpt'
import Note from './note'
import Cover from './cover'
import Path from './path'
import Tags from './tags'
import Reminder from './reminder'
import Highlights from './highlights'
import Important from './important'
import URL from './url'
import * as Suggestions from './suggestions';

function BookmarkEditItem({ draftChange, ...etc }) {
    const onChange = useCallback(obj => {
        draftChange(etc._id, obj)
    }, [ etc._id ])
    Suggestions.useLoadSuggestions(etc)

    return (
        <>
            <Form>
                <TitleCover>
                    <TitleExcerpt>
                        <Title {...etc} onChange={onChange} />
                        <Excerpt {...etc} onChange={onChange} />
                    </TitleExcerpt>

                    <Cover {...etc} onChange={onChange} />
                </TitleCover>

                <Note {...etc} onChange={onChange} />
            </Form>

            <Form>
                <Path last {...etc} onChange={onChange} />
            </Form>
            <Suggestions.Collections {...etc} onChange={onChange} />

            <Form>
                <Tags last {...etc} onChange={onChange} />
            </Form>
            <Suggestions.Tags {...etc} onChange={onChange} />

            <Form>
                <Reminder {...etc} onChange={onChange} />
                <Highlights {...etc} />
                <URL {...etc} onChange={onChange} />
                <Important {...etc} onChange={onChange} last />
            </Form>
        </>
    )
}

export default connect(
	undefined,
	{ draftChange }
)(BookmarkEditItem)