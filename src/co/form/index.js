import { Platform, StyleSheet } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const formElementHeight = 44;
export const baseFormElementStyle = (theme)=>`
	height: ${formElementHeight}px;
	margin-left: ${theme.padding.medium}px;
	padding-left: 0;
	padding-right: ${theme.padding.medium}px;
	border-color: ${theme.color.border};
`

//ScrollView
export const ScrollForm = styled(ScrollView).attrs(({ theme, contentContainerStyle={} })=>({
	contentContainerStyle: {
		paddingTop: theme.padding.medium,
		paddingBottom: theme.padding.large,
		...contentContainerStyle,
	},
	...(Platform.OS=='ios' ? {
		keyboardDismissMode: 'on-drag' //do not enable in android, otherwise field focus bug
	} : {}),
	keyboardShouldPersistTaps: 'always',
	automaticallyAdjustContentInsets: false,
	scrollEventThrottle: 100
}))`
	flex: 1
`

export const BaseInput = styled(TextInput).attrs(({ theme, blurOnSubmit=true, enablesReturnKeyAutomatically=true })=>({
	enablesReturnKeyAutomatically,
	blurOnSubmit,
	underlineColorAndroid: 'transparent',
	disableFullscreenUI: true,
	placeholderTextColor: theme.text.secondary,
	keyboardAppearance: theme.dark?'dark':'default',
	autoCorrect: false
}))`
	font-size: ${({theme})=>theme.fontSize.primary}px;
	color: ${({theme})=>theme.text.regular};
	text-align-vertical: center;
`

export const Input = styled(BaseInput)`
	${({theme})=>baseFormElementStyle(theme)}
	font-size: ${({theme})=>theme.fontSize.primary}px;
	${({last})=>typeof last == 'undefined' ? `
		border-bottom-width: ${StyleSheet.hairlineWidth}px;
	`:''}
	${({optional, theme})=>typeof optional != 'undefined' ? `
		color: ${theme.text.regular};
	`:''}
	${({multiline})=>typeof multiline != 'undefined'  ? `
		margin-top: 6px;
		height: auto;
		padding-bottom: 11px;
		text-align-vertical: top;
	`:''}
`

export const InputEmail = styled(Input).attrs({
	keyboardType: 'email-address',
	autoCorrect: false,
	autoCapitalize: 'none',
	placeholder: 'Email'
})``

export const InputPassword = styled(Input).attrs({
	secureTextEntry: true,
	autoCorrect: false,
	autoCapitalize: 'none'
})``

export const InputURL = styled(Input).attrs({
	keyboardType: Platform.OS == 'ios' ? 'url' : 'email-address',
	autoCorrect: false,
	autoCapitalize: 'none',
	multiline: true,
	textContentType: 'URL',
})``

//Form
export const Form = styled.View`
	margin: ${({theme})=>theme.padding.medium}px;
	margin-top: 0;
	min-height: ${formElementHeight}px;
	height: auto;
	border-radius: ${({theme})=>theme.padding.medium}px;
	background-color: ${({theme})=>theme.background.alternative};
	overflow: hidden;

	${({hide})=>hide && `
		position: absolute;
		z-index:-1;
		opacity: 0;
		left:0;right:0;width:100%;
	`}

	flex-direction: ${({horizontal})=>horizontal ? 'row' : 'column'};
`

export const FormSection = styled.View`
	padding: ${({theme})=>theme.padding.medium}px;
	padding-top: ${({theme})=>theme.padding.small}px;
`


//Utils
export const SubInfoText = styled.Text.attrs({
	includeFontPadding: false,
	underlineColorAndroid: 'transparent'
})`
	font-size: ${({theme})=>theme.fontSize.tertiary}px;
	color: ${({theme})=>theme.text.secondary};
	text-align: center;
	padding-horizontal: ${({theme})=>theme.padding.medium}px;
	margin-top: ${({theme})=>theme.padding.medium}px;
	margin-left: ${({theme})=>theme.padding.medium}px;
`