import { StatusBar } from 'expo-status-bar';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import 'react-native-get-random-values'; // <-- polyfills the 'crypto' global that is usually available on the window object in a browser
import Footer from './components/Footer';
import Stack from './components/Stack';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Stack space={8}>
					<View style={[styles.block, styles.blockSpacingLarge]}>
						<View style={styles.header}>
							<Image
								source={require('./assets/logo.png')}
								style={styles.logo}
							/>
							<View>
								<Text style={[styles.text, styles.textHeading]}>RN Task</Text>
							</View>
						</View>
					</View>
					<View style={styles.block}>
						<Text style={[styles.text, styles.textLarge]}>
							Hello! Please find a short set of tasks to complete below.
							Implement your changes in this project directly, including against
							this file.
						</Text>
					</View>
					<View style={styles.block}>
						<View style={styles.main}>
							<Stack space={0}>
								<View style={[styles.block, styles.blockSpacingSmall]}>
									<Text style={[styles.text, styles.textBold]}>Task 1</Text>
								</View>
								<View style={styles.block}>
									<Text style={styles.text}>
										Build a custom{' '}
										<Text style={[styles.textBold, styles.textItalic]}>
											&lt;Stack /&gt;
										</Text>{' '}
										component for applying consistent spacing values to child
										components...
										<Text
											onPress={() =>
												Linking.openURL(
													'https://mui.com/material-ui/react-stack/',
												)
											}
											style={styles.link}
										>
											Here is an example of a stack component.
										</Text>
									</Text>
								</View>
								<View style={[styles.block, styles.blockSpacingSmall]}>
									<Text style={[styles.text, styles.textBold]}>Task 2</Text>
								</View>
								<View style={[styles.block, styles.blockLastItem]}>
									<Text style={styles.text}>
										This project should be able to run on native devices (e.g.
										Expo Go), but currently something is broken, please fix it.
										{/**
										 * Install the "Expo Go" app on your own mobile device, you should
										 * then be able to run by scanning the QR code from the CLI
										 */}
									</Text>
								</View>
							</Stack>
						</View>
					</View>
				</Stack>

				<Footer />
			</View>

			<StatusBar style="auto" />
		</View>
	);
}

const SPACING = {
	small: 10,
	regular: 20,
	large: 30,
};

const LINE_HEIGHT = 1.4;

const FONT_SIZES = {
	small: 12,
	regular: 16,
	large: 18,
	heading: 24,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	content: {
		width: '100%',
		maxWidth: 800,
		padding: SPACING.large,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	logo: {
		width: 131,
		height: 44,
	},
	main: {
		backgroundColor: '#f6f6f6',
		borderRadius: 12,
		padding: SPACING.regular,
	},
	text: {
		fontSize: FONT_SIZES.regular,
		lineHeight: FONT_SIZES.regular * LINE_HEIGHT,
		textAlign: 'left',
	},
	textSmall: {
		fontSize: FONT_SIZES.small,
		lineHeight: FONT_SIZES.small * LINE_HEIGHT,
	},
	textLarge: {
		fontSize: FONT_SIZES.large,
		lineHeight: FONT_SIZES.large * LINE_HEIGHT,
	},
	textHeading: {
		fontSize: FONT_SIZES.heading,
		lineHeight: FONT_SIZES.heading * LINE_HEIGHT,
		fontWeight: 'bold',
	},
	textBold: {
		fontWeight: 'bold',
	},
	textItalic: {
		fontStyle: 'italic',
	},
	link: {
		color: 'blue',
		textDecorationLine: 'underline',
	},
	// Replace with <Stack /> component?
	block: {
		marginBottom: SPACING.regular,
		alignSelf: 'stretch',
	},
	blockSpacingSmall: {
		marginBottom: SPACING.small,
	},
	blockSpacingLarge: {
		marginBottom: SPACING.large,
	},
	blockLastItem: {
		marginBottom: 0,
	},
});
