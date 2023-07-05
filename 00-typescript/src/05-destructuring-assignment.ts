// --------------------------------------------------------------------------
// destructuring assignment
{
  interface Course {
    id: number;
    title: string;
    url: string;
  }
  const courses: Course[] = [
    {
      id: 1,
      title: 'React 펀더멘탈',
      url: 'https://fundamentals.dev/react',
    },
    {
      id: 2,
      title: 'React Router 펀더멘탈',
      url: 'https://fundamentals.dev/react-rouer',
    },
    {
      id: 3,
      title: 'Recoil 펀더멘탈',
      url: 'https://fundamentals.dev/recoil',
    },
  ];


  function run() {
    // spreadArray();
    // spreadObject();
    spreadRender();
  }

  function spreadArray() {
    // const reactCourse = courses[0];
    // const restCourses = courses.slice(1);

    const [reactCourse, ...restCourses] = courses;
    console.log(reactCourse);
    console.log(restCourses);
  }

  // function spreadObject() {
  //   const [reactCourse, ...restCourses] = courses;

  //   console.log(reactCourse, restCourses);
  //   let reactCourseId = reactCourse.id;
  //   let reactCourseTitle = reactCourse.title;
  //   let reactCourseUrl = reactCourse.url;

  //   console.log(reactCourseId);
  //   console.log(reactCourseTitle);
  //   console.log(reactCourseUrl);
  // }

  interface KoreanFoods {
    caption: string;
    rows: {
        headline: string;
        content: string;
    }[];
}
  function spreadRender() {
    const koreanFoods: KoreanFoods = {
      caption: '한식 메뉴',
      rows: [
        { headline: '뚝배기 불고기', content: '8,000원' },
        { headline: '스팸치즈볶음밥', content: '7,500원' },
        { headline: '불고기낙지덮밥', content: '9,000원' },
      ],
    };

    const rendredResult = renderTable(koreanFoods);
    console.log(rendredResult);

    function renderTable(data: KoreanFoods): string {
      return `
      <table class="table">
        <caption class="sr-only">${data.caption}</caption>
        ${data.rows
          .map(function (item) {
            return `
              <tr>
                <th>${item.headline}</th>
                <td>${item.content}</td>
              </tr>
            `;
          })
          .join('')}
      </table>
    `;
    }
  }


  run();
}