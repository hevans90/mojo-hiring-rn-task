import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type Direction = 'vertical' | 'horizontal';

type StackProps = {
	children: ReactNode;
	space?: number;
	direction?: Direction;
	style?: StyleProp<ViewStyle>;
	align?: ViewStyle['alignItems'];
	justify?: ViewStyle['justifyContent'];
	wrap?: ViewStyle['flexWrap'];
};

const Stack: React.FC<StackProps> = ({
	children,
	space = 8,
	direction = 'vertical',
	style,
	align,
	justify,
	wrap,
}) => {
	const isRow = direction === 'horizontal';

	const validChildren = React.Children.toArray(children).filter(Boolean);

	return (
		<View
			style={[
				{
					flexDirection: isRow ? 'row' : 'column',
					alignItems: align,
					justifyContent: justify,
					flexWrap: wrap,
				},
				style,
			]}
		>
			{validChildren.map((child, index) => {
				const isLast = index === validChildren.length - 1;
				const spacingStyle = isRow
					? { marginRight: isLast ? 0 : space }
					: { marginBottom: isLast ? 0 : space };

				return (
					<View key={index} style={spacingStyle}>
						{child}
					</View>
				);
			})}
		</View>
	);
};

export default Stack;
