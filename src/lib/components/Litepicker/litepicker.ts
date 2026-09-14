import dayjs from 'dayjs';
import type Litepicker from 'litepicker';
import type { LitepickerElement, LitepickerProps } from './Litepicker.svelte';

type LitepickerConstructor = new (options: LitepickerProps['options'] & { element: HTMLElement }) => Litepicker;

const loadLitepicker = async (): Promise<LitepickerConstructor> => {
	const module = (await import('litepicker')) as unknown as Record<string, unknown>;
	const defaultExport = module.default as Record<string, unknown> | undefined;
	const constructor = [module.default, module.Litepicker, defaultExport?.default].find(
		(candidate): candidate is LitepickerConstructor => typeof candidate === 'function'
	);

	if (typeof constructor !== 'function') {
		throw new TypeError('Litepicker did not provide a constructor.');
	}

	return constructor as LitepickerConstructor;
};

const getDateFormat = (format: string | undefined) => {
	return format !== undefined ? format : 'D MMM, YYYY';
};

const setValue = (props: LitepickerProps) => {
	const format = getDateFormat(props.options.format);
	if (!props.value.length) {
		let date = dayjs().format(format);
		date +=
			!props.options.singleMode && props.options.singleMode !== undefined
				? ' - ' + dayjs().add(1, 'month').format(format)
				: '';
		props.onChange(date);
	}
};

const init = async (el: LitepickerElement, props: LitepickerProps) => {
	const format = getDateFormat(props.options.format);
	const Litepicker = await loadLitepicker();
	el.litePickerInstance = new Litepicker({
		...props.options,
		element: el,
		format: format,
		setup: (picker: Litepicker) => {
			picker.on('selected', (startDate, endDate) => {
				let date = dayjs(startDate.dateInstance).format(format);
				date +=
					endDate !== undefined && endDate !== null
						? ' - ' + dayjs(endDate.dateInstance).format(format)
						: '';
				props.onChange(date);
			});
		}
	});
};

const reInit = async (el: LitepickerElement, props: LitepickerProps) => {
	el.litePickerInstance.destroy();
	await init(el, props);
};

export { setValue, init, reInit };
