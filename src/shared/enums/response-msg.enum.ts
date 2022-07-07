export enum ResponseMsg {
    userExistMsg = 'Пользователь с таким email уже существует',
    wrongMailOrPassMsg = 'Некорректный email или пароль',
    unauthorizedMsg = 'Пользователь не авторизован',
    forbiddenMsg = 'Доступ запрещен',
    notFoundUserOrRoleMsg = 'Пользователь или роль не найдены',
    notFoundUserMsg = 'Пользователь не найден',
    shouldBeStringMsg = 'Должно быть строкой',
    shouldBeNumberMsg = 'Должно быть числом',
    correctPasswordLengthLimitsMsg = 'Пароль должен быть от 8 до 16 символов',
    incorrectEmailMsg = 'Некорректный email',
    writingFileErrMsg = 'Произошла ошибка при записи файла',
}
