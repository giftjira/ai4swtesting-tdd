class Timesheet {
	constructor() {
		this.timesheets = new Map();
	}

	submitTimesheet(projectName, hours) {
		if (typeof hours !== 'number' || !Number.isFinite(hours) || hours < 0) {
			return false;
		}

		const existingHours = this.timesheets.get(projectName) ?? 0;
		this.timesheets.set(projectName, existingHours + hours);
		return true;
	}

	getTimesheets() {
		return [...this.timesheets.values()];
	}

	getTotalTimesheetHours(projectName) {
		return this.timesheets.get(projectName);
	}
}

module.exports = Timesheet;
