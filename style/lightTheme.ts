import { ThemeType } from "./ThemeType";
import * as colors from "./colors";
import { fade, darken, lighten } from "../common/colorManipulator";

const baseHigh = "rgb(0, 0, 0)";
const altHigh = "rgb(255, 255, 255)";
const accent = colors.blue500;

const lightTheme: ThemeType = {
	accent,
	accentLighter1: lighten(accent, 0.5),
	accentLighter2: lighten(accent, 0.7),
	accentLighter3: lighten(accent, 0.9),
	accentDarker1: darken(accent, 0.5),
	accentDarker2: darken(accent, 0.7),
	accentDarker3: darken(accent, 0.9),

	baseLow: fade(baseHigh, 0.2),
	baseMediumLow: fade(baseHigh, 0.4),
	baseMedium: fade(baseHigh, 0.6),
	baseMediumHigh: fade(baseHigh, 0.8),
	baseHigh,

	altLow: fade(altHigh, 0.2),
	altMediumLow: fade(altHigh, 0.4),
	altMedium: fade(altHigh, 0.6),
	altMediumHigh: fade(altHigh, 0.8),
	altHigh,

	listLow: fade(baseHigh, 0.1),
	listMedium: fade(baseHigh, 0.2),
	listAccentLow: fade(accent, 0.4),
	listAccentMedium: fade(accent, 0.6),
	listAccentHigh: fade(accent, 0.7),

	chromeLow: "#f2f2f2",
	chromeMediumLow: "#f2f2f2",
	chromeMedium: "#e6e6e6",
	chromeHigh: "#ccc",
	chromealtLow: "#171717",
	chromeDisabledLow: "#7a7a7a",
	chromeDisabledHigh: "#ccc",
	chromeBlackLow: fade("#000", 0.2),
	chromeBlackMediumLow: fade("#000", 0.4),
	chromeBlackMedium: fade("#000", 0.8),
	chromeBlackHigh: "#000",
	chromeWhite: "#fff"
};

export default lightTheme;
