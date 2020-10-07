# GOGOSCHOOL - 학교가자
> IBM 2020 Call for Code Korea Hackathon

![gogoschool-banner](https://github.com/solidw/gogoschool/blob/master/screenshots/gogoschool-banner.png)

## Screenshots

### For Student
<p float="left">
	<img src="https://github.com/solidw/gogoschool/blob/master/screenshots/student-1.jpg" width="200" />
	<img src="https://github.com/solidw/gogoschool/blob/master/screenshots/student-2.jpg" width="200" />
	<img src="https://github.com/solidw/gogoschool/blob/master/screenshots/student-3.jpg" width="200" />
	<img src="https://github.com/solidw/gogoschool/blob/master/screenshots/student-4.jpg" width="200" />
</p>

### For Teacher
<p float="left">
	<img src="https://github.com/solidw/gogoschool/blob/master/screenshots/teacher-1.jpg" width="200" />
	<img src="https://github.com/solidw/gogoschool/blob/master/screenshots/teacher-2.jpg" width="200" />
	<img src="https://github.com/solidw/gogoschool/blob/master/screenshots/teacher-3.jpg" width="200" />
	<img src="https://github.com/solidw/gogoschool/blob/master/screenshots/teacher-4.jpg" width="200" />
</p>

## How to Run

1. `git clone https://github.com/solidw/gogoschool`
2. `npm install`
3. set Android Virtual Device or Actual Device
4. How to set Android Virtual Device: [Here](https://recipes4dev.tistory.com/145)
5. Run Android Virtual Device
6. Type `npx react-native run-android` in git-bash or something shell (vscode .. )
7. Done !

### Commit Style : refer to [Udacity Commit Guide](https://udacity.github.io/git-styleguide/)

- Form of commit : `label : (verb) (title)`
- Type of `label` 
	- `feat` : a new feature
	- `fix` : a bug fix
	- `docs` : changes to documentation
	- `style` : formatting, missing semi colons, etc; no code change
	- `refactor` : refactoring production code
	- `test` : adding tests, refactoring test; no production code change
	- `chore` : updating build tasks, package manager configs, etc; no production code change

- Example
  - `docs : Add foo.md`
  - `docs : Change README.md that somebody can read this`
  - `fix : Fix bugs image's directory in bar.md`

### build

> npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

### The list of todo for ios (Android First Dev)

- location permission
- font
- firebase