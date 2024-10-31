import { useLinkProps } from '@react-navigation/native'
import Icon from 'co/icon'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import {
	ImageView,
	GotoView,
	GotoTitleText,
	GotoActionText,
	ActionButton
} from './style'

function NavPressable({ to, ...etc }) {
	const { onPress, ...props } = useLinkProps({ to })
	return <TouchableNativeFeedback {...etc} onPress={onPress} {...props}></TouchableNativeFeedback>
}

const Goto = ({
	icon,
	variant,
	color,
	ellipsizeMode='tail',

	action='arrow-right-s',
	actionColor,
	actionVariant,
	label,
	labelFontFamily,
	subLabel,
	subLabelBadge,
	last, 

	to,
	onPress,
	onActionPress
})=>{
	let actionIcon
	if (action)
		actionIcon = <Icon name={action} variant={actionVariant} color={actionColor} />

	let iconItself
	switch(typeof icon) {
		case 'string': iconItself = <Icon name={icon} variant={variant} color={color} />; break
		case 'object': iconItself = icon; break
	}

	const Component = to ? NavPressable : TouchableNativeFeedback

	return (
		<Component to={to} onPress={onPress}>
			<GotoView last={last}>
				{iconItself ? <ImageView>{iconItself}</ImageView> : null}
				<GotoTitleText ellipsizeMode={ellipsizeMode} fontFamily={labelFontFamily}>{label}</GotoTitleText>
				<GotoActionText badge={subLabelBadge}>{subLabel}</GotoActionText>
				{onActionPress ? <ActionButton onPress={onActionPress}>{actionIcon}</ActionButton> : actionIcon}
			</GotoView>
		</Component>
	)
}

export default Goto