import React from 'react'
import { PixelRatio } from 'react-native'
import FastImage from 'react-native-fast-image'
import { getColorForString } from 'data/helpers/colors'
import getThumb from 'data/modules/format/thumb'
import { LoadingWrap, CoverImage } from './style'

const dpr = PixelRatio.get()

export default class Cover extends React.PureComponent {
	static defaultProps = {
		mode:		'crop',
		ar:			'',
		preloader:	false
	}

	state = this.prepareState(this.props)

	componentDidUpdate(prevProps) {
		if (prevProps.src != this.props.src ||
			prevProps.width != this.props.width ||
			prevProps.height != this.props.height)
			this.setState(this.prepareState(this.props))
	}

	prepareState() {
		const { src, mode='', ar='', width='', height='' } = this.props

		if (src)
			return {
				loaded: false,
				source: {
					uri: `${getThumb(src)}&mode=${mode}&ar=${ar}&width=${width}&height=${height}&dpr=${dpr}`,
					priority: FastImage.priority.low
				}
			}
		else
			return this.fallback()
	}

	fallback() {
		if (this.props.domain)
			return { loaded: true, fallbackColor: getColorForString(this.props.domain||'')+'40' }
		else
			return {}
	}

	onError = ()=>{
		this.setState(this.fallback())
	}

	onLoadEnd = ()=>{
		this.setState({ loaded: true })
	}

	renderImage = ()=>{
		const { loaded, ...state } = this.state
		const { preloader, src, domain, ...props } = this.props

		return (
			<CoverImage 
				key='image'
				{...props}
				{...state}
				onError={this.onError}
				onLoadEnd={preloader && this.onLoadEnd} />
		)
	}

	render() {
		if (this.props.preloader && !this.state.loaded)
			return [ <LoadingWrap key='loading'/>, this.renderImage() ]
		else
			return this.renderImage()
	}
}