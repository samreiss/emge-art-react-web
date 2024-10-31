import { test, expect } from '@playwright/test';

// Common function to validate a navigation link
async function testNavigationLink(page, linkText, expectedUrl) {
  await page.goto('/');
  const link = page.locator(`text=${linkText}`);
  await expect(link).toBeVisible();
  await link.click();
  //find "Meet Mrs. Nicole Reiss" link on the page to confirm the page has loaded
  await expect(page.locator('text=Meet Mrs. Nicole Reiss')).toBeVisible();
}

test('validate all main navigation links', async ({ page }) => {
  // List of links to test with their expected URLs
  /**
   * An array of objects representing navigation links to be tested.
   * Each object contains the text to be displayed for the link and the URL it points to.
   *
   * @type {Array<{text: string, url: string}>}
   * @property {string} text - The display text of the navigation link.
   * @property {string} url - The URL the navigation link points to.
   */
  const linksToTest = [
    { text: 'Home', url: '/' },
    { text: 'Meet Mrs. Nicole Reiss', url: '/MeetNicoleReiss' },
    { text: 'District Office Art Display', url: '/DistrictOfficeArtDisplay' },
    { text: 'District K-12 Art Show', url: '/DistrictK12ArtShow' },
    { text: 'Emge School Art Show', url: '/EmgeSchoolArtShow' },
    { text: 'Picture the Music', url: '/PictureTheMusic' },
    { text: 'Parent Volunteers', url: '/ParentVolunteers' },
    { text: 'Art Links', url: '/ArtLinks' },
  ];

  // Test each link using the helper function
  for (const link of linksToTest) {
    //console.log(`Testing link: ${link.text} -> ${link.url}`);
    await testNavigationLink(page, link.text, link.url);
  }
});