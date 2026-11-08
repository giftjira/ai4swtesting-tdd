const Timesheet = require('../src/timesheet');

test('submitting a timesheet with a project name and hours returns true', () => {
	const timesheet = new Timesheet();
	const result = timesheet.submitTimesheet('Project 1', 8);
	expect(result).toBe(true);
});

test('timesheets that are added can be retrieved as a list', () => {
	const timesheet = new Timesheet();
	timesheet.submitTimesheet('Project 1', 8);
	timesheet.submitTimesheet('Project 2', 8);
	timesheet.submitTimesheet('Project 3', 8);
	expect(timesheet.getTimesheets()).toHaveLength(3);
});

test('total hours worked can be calculated from timesheets for one project', () => {
	const timesheet = new Timesheet();
	timesheet.submitTimesheet('Project 1', 8);
	timesheet.submitTimesheet('Project 1', 8);
	timesheet.submitTimesheet('Project 1', 8);

	const totalHours = timesheet.getTotalTimesheetHours('Project 1');

	expect(totalHours).toBe(24);
});