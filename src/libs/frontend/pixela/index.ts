const exampleToken = 'mytoken-secret';

export const pixelaCreateUser = async (username: string, token: string) => {
  const response = await fetch('https://pixe.la/v1/users', {
    method: 'POST',
    // headers: {
    //   'X-USER-TOKEN': token,
    // },
    body: JSON.stringify({
      token,
      username,
      agreeTermsOfService: 'yes',
      notMinor: 'yes',
    }),
  });

  return response.json();
};

/* Graphの新規作成 */
export const pixelaCreateGraph = async (username: string) => {
  const response = await fetch(`https://pixe.la/v1/users/${username}/graphs`, {
    method: 'POST',
    headers: {
      'X-USER-TOKEN': exampleToken,
    },
    body: JSON.stringify({
      id: 'test-graph-id',
      name: 'Pixela Test Graph',
      unit: 'commit',
      type: 'int',
      color: 'shibafu',
      timezone: 'Asia/Tokyo',
    }),
  });

  return response.json();
};

/* Increment */
export const pixelaIncrementGraph = async (
  username: string,
  graphId: string
) => {
  const response = await fetch(
    `https://pixe.la/v1/users/${username}/graphs/${graphId}/increment`,
    {
      method: 'PUT',
      headers: {
        'X-USER-TOKEN': exampleToken,
      },
    }
  );

  return response.json();
};
