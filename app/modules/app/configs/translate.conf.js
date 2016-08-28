
export default function($translateProvider) {
	$translateProvider.useSanitizeValueStrategy('escape');
	$translateProvider.preferredLanguage('en');
}