import { openConfirmModal } from '@mantine/modals';

import { TopLinkButton } from 'src/components/ui/TopLinkButton';

export const openMyLinksModal = () =>
  openConfirmModal({
    // title: "nob's links",
    children: (
      <div className="">
        <TopLinkButton label="Profile" url="" />
        <TopLinkButton label="Blog" url="" />
        <TopLinkButton label="GitHub" url="" />
        <TopLinkButton label="Zenn" url="" />
        <TopLinkButton label="note" url="" />
        <TopLinkButton label="Twitter" url="" />
        <TopLinkButton label="YouTube" url="" />
      </div>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    // onCancel: () => console.log('Cancel'),
    // onConfirm: () => console.log('Confirmed'),
  });
