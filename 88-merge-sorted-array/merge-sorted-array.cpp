class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int> nums3(m + n);
        int p1 = 0;
        int p2 = 0;

        for (int i = 0; i < m + n; i++) {
            if (p2 >= n || (p1 < m  && nums1[p1] < nums2[p2])) {
                nums3[i] = nums1[p1++];
            } else {
                nums3[i] = nums2[p2++];
            }
        }

        for (int i = 0; i < m + n; i++) {
            nums1[i] = nums3[i];
        }
    }
};